import Image from "next/image";

export default function TariffNotice() {
  return (
    <div className="flex gap-2 items-start mt-2 xl:mt-5 py-3 xl:py-4 px-4 xl:px-5 max-w-[499px] bg-[rgba(45,50,51,1)] rounded-[20px]">
      <Image 
        src="/alert.png" 
        alt="!" 
        width={24} 
        height={24} 
        className="w-5 h-5 xl:w-6 xl:h-6 flex-shrink-0"
      />
      <p className="text-[12px] xl:text-[16px]">
        Следуя плану на 3 месяца и более, люди получают в 2 раза
        лучший результат, чем за 1 месяц
      </p>
    </div>
  );
}