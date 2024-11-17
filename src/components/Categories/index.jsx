export const Categories = ({ url, children }) => {
    //ИСПОЛЬЗУЙ ЭТО ДЛЯ КАТЕГОРИИ
    return (
        <div className="flex flex-col items-center">
            <img src={url} alt={url} className="rounded-t-lg" />
            <div className="mt-4 text-center">
                {children}
            </div>
        </div>
    );
};