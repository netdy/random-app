type DefaultFooterProps = {
    label: string;
};

export const DefaultFooter = ({ label }: DefaultFooterProps) => {
    return (
        <footer className="bg-gray-100 text-center p-4 text-sm text-gray-500 mt-auto">
            {label}
        </footer>
    );
};
