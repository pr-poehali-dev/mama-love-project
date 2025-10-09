const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-green-900 via-emerald-600 to-lime-500">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.3),transparent_50%)] animate-neon-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(134,239,172,0.2),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(74,222,128,0.2),transparent_50%)]"></div>
      
      <div className="absolute top-10 left-10 animate-float">
        <div className="text-6xl" style={{ 
          filter: 'drop-shadow(0 0 20px #22C55E) drop-shadow(0 0 40px #22C55E)',
          animation: 'neon-pulse 3s ease-in-out infinite'
        }}>
          💖
        </div>
      </div>
      
      <div className="absolute bottom-20 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <div className="text-6xl" style={{ 
          filter: 'drop-shadow(0 0 20px #4ADE80) drop-shadow(0 0 40px #4ADE80)',
          animation: 'neon-pulse 2.5s ease-in-out infinite'
        }}>
          💕
        </div>
      </div>
      
      <div className="absolute top-1/3 right-10 animate-float" style={{ animationDelay: '0.5s' }}>
        <div className="text-5xl" style={{ 
          filter: 'drop-shadow(0 0 20px #86EFAC) drop-shadow(0 0 40px #86EFAC)',
          animation: 'neon-pulse 2.8s ease-in-out infinite'
        }}>
          ❤️
        </div>
      </div>
      
      <div className="relative z-10 text-center px-4">
        <h1 
          className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 tracking-tight"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            textShadow: `
              0 0 10px #22C55E,
              0 0 20px #22C55E,
              0 0 30px #22C55E,
              0 0 40px #4ADE80,
              0 0 70px #4ADE80,
              0 0 80px #4ADE80,
              0 0 100px #86EFAC,
              0 0 150px #86EFAC
            `,
            animation: 'neon-pulse 2s ease-in-out infinite'
          }}
        >
          Родители,<br />я люблю вас!
        </h1>
        
        <div className="flex justify-center gap-8 mt-12">
          <div className="text-4xl animate-float" style={{ 
            color: '#22C55E',
            filter: 'drop-shadow(0 0 15px #22C55E)',
            animationDelay: '0.2s'
          }}>
            ✨
          </div>
          <div className="text-4xl animate-float" style={{ 
            color: '#4ADE80',
            filter: 'drop-shadow(0 0 15px #4ADE80)',
            animationDelay: '0.4s'
          }}>
            ✨
          </div>
          <div className="text-4xl animate-float" style={{ 
            color: '#86EFAC',
            filter: 'drop-shadow(0 0 15px #86EFAC)',
            animationDelay: '0.6s'
          }}>
            ✨
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;