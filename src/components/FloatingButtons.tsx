import { business } from "@/data/business";

export function FloatingButtons() {
  return (
    <>
      <div className="fixed right-4 bottom-[5.25rem] z-50 flex flex-col items-center gap-2.5 sm:bottom-5">
        <a
          href={business.tel}
          aria-label={`Call ${business.name}`}
          className="float-help flex h-12 w-12 items-center justify-center rounded-full bg-red shadow-xl transition hover:bg-red-dark sm:h-14 sm:w-14"
        >
          <i className="fa-solid fa-phone text-lg text-white sm:text-xl"></i>
        </a>
        <a
          href={business.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`WhatsApp ${business.name}`}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-whatsapp shadow-xl transition hover:bg-green-600 sm:h-14 sm:w-14"
        >
          <i className="fa-brands fa-whatsapp text-xl text-white sm:text-2xl"></i>
        </a>
      </div>
      <a
        href={business.tel}
        aria-label={`Emergency Call ${business.name}`}
        className="animated-contact fixed inset-x-0 bottom-0 z-40 flex items-center justify-center gap-3 bg-gradient-to-r from-red to-red-dark py-3.5 text-base font-bold text-white shadow-[0_-4px_20px_rgba(0,0,0,0.25)] transition hover:brightness-110 sm:hidden"
      >
        <i className="fa-solid fa-phone text-lg"></i>
        Emergency Call
      </a>
    </>
  );
}
