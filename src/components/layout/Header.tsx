import HeaderPathname from "@/components/layout/HeaderPathname";

const Header = () => {
    return (
        <header className="flex flex-col items-center select-none justify-center py-2 w-11/12">
            <HeaderPathname/>
            <div className="border-b h-1 w-full" />
        </header>
    );
};

export default Header;
