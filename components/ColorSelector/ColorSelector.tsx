'use client'
import React from 'react'
import { cn } from '@/lib/utils'

type AttributeValue = {
    id: number
    value: string
    code: string | null
    attribute: {
        id: number
        name: string
    }
}

type Variation = {
    id: number
    sku: string
    price: number
    stock: number
    image: { id: number; url: string }
    gallery: { id: number; url: string }[]
    attribute_values: AttributeValue[]
}

type Props = {
    variations: Variation[]
    onChange?: (variation: Variation | undefined) => void
}

const ColorSelector = ({ variations, onChange }: Props) => {
    const grouped = React.useMemo(() => {
        const map: Record<number, { name: string; values: Map<number, AttributeValue> }> = {}

        variations?.forEach((variation) => {
            variation.attribute_values?.forEach((item) => {
                const attrId = item.attribute.id
                if (!map[attrId]) {
                    map[attrId] = { name: item.attribute.name, values: new Map() }
                }
                map[attrId].values.set(item.id, item)
            })
        })

        return Object.entries(map).map(([attrId, group]) => ({
            attributeId: Number(attrId),
            name: group.name,
            values: Array.from(group.values.values()),
        }))
    }, [variations])

    // selected[attributeId] = attributeValueId
    const [selected, setSelected] = React.useState<Record<number, number>>(() => {
        const initial: Record<number, number> = {}
        grouped.forEach((g) => {
            if (g.values[0]) initial[g.attributeId] = g.values[0].id
        })
        return initial
    })

    const matchedVariation = React.useMemo(() => {
        const selectedIds = Object.values(selected)
        return variations?.find((variation) => {
            const variationValueIds = variation.attribute_values.map((v) => v.id)
            return selectedIds.every((id) => variationValueIds.includes(id))
                && variationValueIds.length === selectedIds.length
        })
    }, [selected, variations])

    React.useEffect(() => {
        onChange?.(matchedVariation)
    }, [matchedVariation]) // eslint-disable-line react-hooks/exhaustive-deps

    const handleSelect = (attributeId: number, valueId: number) => {
        setSelected((prev) => ({ ...prev, [attributeId]: valueId }))
    }

    return (
        <div className="flex flex-col gap-4">
            {grouped.map((group) => (
                <div key={group.attributeId} className="flex flex-col gap-6">
                    <p className="font-semibold text-xl">
                        {group.name}:{" "}
                        <span>
                            {group.values.find((v) => v.id === selected[group.attributeId])?.value}
                        </span>
                    </p>

                    <div className="flex gap-3 flex-wrap">
                        {group.values.map((item) =>
                            item.code ? (
                                <button
                                    key={item.id}
                                    onClick={() => handleSelect(group.attributeId, item.id)}
                                    title={item.value}
                                    style={{
                                        backgroundColor: item.code,
                                        borderColor:
                                            selected[group.attributeId] === item.id ? item.code : "black",
                                    }}
                                    className={cn(
                                        "size-8 rounded-full border-2 transition-all hover:scale-110",
                                        selected[group.attributeId] === item.id
                                            ? "ring-2 ring-offset-2 ring-primary scale-110"
                                            : "opacity-70"
                                    )}
                                />
                            ) : (
                                <button
                                    key={item.id}
                                    onClick={() => handleSelect(group.attributeId, item.id)}
                                    className={cn(
                                        "px-3 py-1 rounded-full border text-sm transition-all",
                                        selected[group.attributeId] === item.id
                                            ? "border-black bg-black text-white"
                                            : "border-gray-300 text-gray-700 hover:border-black"
                                    )}
                                >
                                    {item.value}
                                </button>
                            )
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ColorSelector