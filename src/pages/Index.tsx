const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-purple-900 via-pink-600 to-cyan-500">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,20,147,0.3),transparent_50%)] animate-neon-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,255,255,0.2),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(160,32,240,0.2),transparent_50%)]"></div>
      
      <div className="absolute top-10 left-10 animate-float">
        <div className="text-6xl text-neon-pink" style={{ 
          filter: 'drop-shadow(0 0 20px #FF1493) drop-shadow(0 0 40px #FF1493)',
          animation: 'neon-pulse 3s ease-in-out infinite'
        }}>
          💖
        </div>
      </div>
      
      <div className="absolute bottom-20 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <div className="text-6xl text-neon-cyan" style={{ 
          filter: 'drop-shadow(0 0 20px #00FFFF) drop-shadow(0 0 40px #00FFFF)',
          animation: 'neon-pulse 2.5s ease-in-out infinite'
        }}>
          💕
        </div>
      </div>
      
      <div className="absolute top-1/3 right-10 animate-float" style={{ animationDelay: '0.5s' }}>
        <div className="text-5xl text-neon-purple" style={{ 
          filter: 'drop-shadow(0 0 20px #A020F0) drop-shadow(0 0 40px #A020F0)',
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
              0 0 10px #FF1493,
              0 0 20px #FF1493,
              0 0 30px #FF1493,
              0 0 40px #00FFFF,
              0 0 70px #00FFFF,
              0 0 80px #00FFFF,
              0 0 100px #A020F0,
              0 0 150px #A020F0
            `,
            animation: 'neon-pulse 2s ease-in-out infinite'
          }}
        >
          Мама,<br />я люблю тебя!
        </h1>
        
        <div className="flex justify-center gap-8 mt-12">
          <div className="text-4xl animate-float" style={{ 
            color: '#FF1493',
            filter: 'drop-shadow(0 0 15px #FF1493)',
            animationDelay: '0.2s'
          }}>
            ✨
          </div>
          <div className="text-4xl animate-float" style={{ 
            color: '#00FFFF',
            filter: 'drop-shadow(0 0 15px #00FFFF)',
            animationDelay: '0.4s'
          }}>
            ✨
          </div>
          <div className="text-4xl animate-float" style={{ 
            color: '#A020F0',
            filter: 'drop-shadow(0 0 15px #A020F0)',
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
