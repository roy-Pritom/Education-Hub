import Footer from "@/components/Common/Footer";
import Header from "@/components/Common/Header";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer/>
    </>
  );
};

export default CommonLayout;
