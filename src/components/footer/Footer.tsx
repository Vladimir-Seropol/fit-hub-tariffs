"use client";

export default function Footer() {
  return (
    <footer className="max-w-[1216px] px-4 xl:px-0 w-full mx-auto flex flex-col lg:flex-row items-center mt-[14px] xs:mt-[22px] xl:mt-[64px]  pb-[150px]">
      <div className="text-sm p-3 xl:p-5  border border-[rgba(72,77,78,1)] rounded-[20px] xl:rounded-[35px]">
        <button
          className="
    font-medium
    mb-2
    xl:mb-8
    text-[16px]
    xs:text-[18px]
    xl:text-[28px]
    leading-[120%]
    text-[rgba(129,254,149,1)]
    border-1 border-[rgba(129,254,149,1)] py-2 xs:py-3 xl:py-4 px-4 xl:px-8 pb-3 xs:pb-none
    rounded-[30px]"
        >
          гарантия возврата 30 дней
        </button>
         <p className=" font-normal text-[13px] xs:text-[14px] xl:text-[24px] leading-[130%] tracking-[0px] text-[rgba(220,220,220,1)]">
          Мы уверены, что наш план сработает для тебя и ты увидишь видимые
          результаты уже через 4 недели! Мы даже готовы полностью вернуть твои
          деньги в течение 30 дней с момента покупки, если ты не получишь
          видимых результатов.
        </p>
      </div>
    </footer>
  );
}
