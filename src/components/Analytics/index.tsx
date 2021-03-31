const Analytics = () => (
  <>
    <script
      dangerouslySetInnerHTML={{
        __html: `
        document.addEventListener('DOMContentLoaded', () => {
          setTimeout(initGTM, 3500);
        });
        document.addEventListener('scroll', initGTMOnEvent);
        document.addEventListener('mousemove', initGTMOnEvent);
        document.addEventListener('touchstart', initGTMOnEvent);
        
        function initGTMOnEvent (event) {
          initGTM();
          event.currentTarget.removeEventListener(event.type, initGTMOnEvent);
        }
        
        function initGTM () {
          if (window.gtmDidInit) {
            return false;
          }
          window.gtmDidInit = true;
          const script = document.createElement('script');
          script.type = 'text/javascript';
          script.async = true;
          script.onload = () => {
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GA_TRACKING}', {
              page_path: window.location.pathname,
            });
          }
          script.src = 'https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING}';
        
          document.head.appendChild(script);
        }
        `
      }}
    />
  </>
)

export default Analytics
