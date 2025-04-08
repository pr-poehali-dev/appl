import { Button } from "@/components/ui/button";
import AppleLogo from "@/components/AppleLogo";

const Hero = () => {
  return (
    <section className="bg-black text-white py-24 md:py-32 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#000] via-[#111] to-[#000] opacity-80"></div>
      
      {/* Декоративные элементы */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#fbfbfd] via-[#06c] to-[#fbfbfd] opacity-60"></div>
      <div className="absolute -bottom-40 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[#06c] opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-8 opacity-90 text-white">
          <AppleLogo className="h-12 w-12 mx-auto text-white" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#fbfbfd] via-[#06c] to-[#fbfbfd]">
          Apple Gift Card
        </h1>
        
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed text-gray-300">
          Один подарок. <span className="text-[#06c] font-medium">Безграничные возможности.</span> 
          <br />Для всех ваших любимых устройств Apple.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <Button
            className="bg-white hover:bg-opacity-90 rounded-full px-10 py-7 font-medium text-black text-lg transition-transform hover:scale-105"
            onClick={() => document.getElementById('cards')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Выбрать карту
          </Button>
          
          <Button
            variant="outline"
            className="bg-transparent rounded-full px-10 py-7 font-medium border-[#06c] text-[#06c] text-lg hover:bg-[#06c]/10"
            onClick={() => document.getElementById('how-to-use')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Узнать больше
          </Button>
        </div>

        {/* Декоративные цветные круги */}
        <div className="flex justify-center gap-4 mb-8">
          <div className="h-3 w-3 rounded-full bg-[#06c] animate-pulse"></div>
          <div className="h-3 w-3 rounded-full bg-[#ff375f] animate-pulse delay-75"></div>
          <div className="h-3 w-3 rounded-full bg-[#30d158] animate-pulse delay-150"></div>
          <div className="h-3 w-3 rounded-full bg-[#ffd60a] animate-pulse delay-300"></div>
        </div>
        
        {/* Производительность */}
        <div className="inline-block px-4 py-2 rounded-full bg-[#06c]/20 backdrop-blur-md">
          <span className="text-sm font-medium text-[#06c]">Мощность. Красота. Магия.</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;