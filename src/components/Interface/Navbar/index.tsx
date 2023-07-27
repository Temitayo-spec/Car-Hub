import CustomButton from '@/components/Common/CustomButton';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="mx-auto flex justify-between items-center sm:px-16 px-6 py-4 max-w-[1400px]">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/svgs/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-containe"
          />
        </Link>
        <CustomButton
          title="Sign In"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px] shadow-md"
          btnType="submit"
        />
      </nav>
    </header>
  );
};

export default Navbar;
