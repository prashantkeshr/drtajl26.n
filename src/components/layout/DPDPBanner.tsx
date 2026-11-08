export default function DPDPBanner() {
  return (
    <div className="bg-saffron/8 border-t border-saffron/15 px-6 py-4 text-center">
      <span className="text-xs text-gray-light">
        Dhurta India complies with the{" "}
        <span className="text-saffron font-semibold">
          Digital Personal Data Protection Act, 2023
        </span>
        . Your data stays in India.{" "}
        <a href="/privacy" className="underline hover:text-saffron transition-colors">
          Privacy Policy
        </a>
      </span>
    </div>
  );
}
