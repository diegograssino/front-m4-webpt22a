import LoginComponent from "@/components/LoginComponent/LoginComponent";
import LoginHeader from "@/components/LoginHeader/LoginHeader";

const page = () => {
  return (
    <div className="mb-8">
      <LoginHeader />
      <LoginComponent />
    </div>
  );
};

export default page;
