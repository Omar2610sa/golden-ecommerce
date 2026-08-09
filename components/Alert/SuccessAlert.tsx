'use client'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import Image from 'next/image'
import { createRoot } from 'react-dom/client'
import SuccessIcon from '@/assets/icons/check.gif'
import { useState, useEffect } from 'react'

type Props = {
    title: string
    description: string
    onClose: () => void
}

function SuccessAlertComponent({ title, description, onClose }: Props) {
    const [open, setOpen] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setOpen(false)
            setTimeout(onClose, 200)
        }, 3000)

        return () => clearTimeout(timer)
    }, [onClose])

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent hideCloseButton className="sm:max-w-sm flex flex-col items-center gap-6 py-10">
                <Image
                    src={SuccessIcon}
                    alt="success"
                    width={150}
                    height={120}
                    className="object-contain"
                />
                <div className='flex flex-col justify-center items-center gap-3'>
                    <p className="text-center text-3xl font-medium">{title}</p>
                    <span className="text-center  text-gray-500">
                        {description}
                    </span>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export const SuccessAlert = (title: string, description: string) => {
    const container = document.createElement('div')
    document.body.appendChild(container)

    const root = createRoot(container)

    const onClose = () => {
        root.unmount()
        if (document.body.contains(container)) {
            document.body.removeChild(container)
        }
    }

    root.render(<SuccessAlertComponent title={title} onClose={onClose} description={description} />)
}