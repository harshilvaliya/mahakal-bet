import React from "react";

interface ButtonProps {
  href: string;
  variant: "primary" | "outline";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ href, variant, children }) => {
  const baseStyles = "text-lg lg:text-xl font-bold rounded-xl cursor-pointer transition-all";
  const variantStyles = {
    primary: "bg-primary-400 hover:bg-primary-600 text-light border-transparent py-2 lg:py-4 px-4 lg:px-8",
    outline: "bg-transparent hover:!bg-primary-600 text-light border border-primary-600 py-[7px] lg:py-[15px] px-4 lg:px-8"
  };

  return (
    <a 
      href={href} 
      className={`${baseStyles} ${variantStyles[variant]}`}
      target="_blank"
      rel="noopener noreferrer"
      role="button"
    >
      {children}
    </a>
  );
};

const CtaBanner: React.FC = () => {
  return (
    <section className="py-12 md:py-[125px] px-4 bg-secondary-0 shape-grid" aria-label="Call to Action">
      <div className="max-w-[872px] mx-auto text-center px-4 md:px-8">
        <h2 className="text-3xl md:text-[48px] md:leading-[64px] text-light mb-3 font-bold">
          Play Anytime, Anywhere Download the App or Try Live!
        </h2>
        <p className="text-lg md:text-2xl font-medium mb-8 md:mb-10 text-secondary-700">
          Download the Mahakal App for{" "}
          <span className="text-primary-600">fast & secure</span> betting on the
          go, or enjoy the same thrilling experience on our Live Web App
        </p>
        <div className="flex items-center justify-center gap-4 mb-4">
          <Button href="/download" variant="primary">
            Download App
          </Button>
          <Button href="/signup" variant="outline">
            Sign Up
          </Button>
        </div>
        <p className="text-lg font-medium text-neutralGray-500" aria-label="Age restriction notice">
          *For 18+ and above only
        </p>
      </div>
    </section>
  );
};

export default CtaBanner;
