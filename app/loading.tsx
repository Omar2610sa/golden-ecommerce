export default function Loading() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
            <div className="size-16 rounded-full border-4 border-[#F9AB1E]/20 border-t-[#F9AB1E] animate-spin" />
        </div>
    );
}