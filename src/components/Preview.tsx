import { useEffect, useRef } from "react";
import "./preview.css";

interface PreviewProps {
  code: string;
  error: string;
}

const html = `
<!DOCTYPE html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
</head>
<body>
  <div id="root"></div>
  <script>
    const handleError = (err) => {
      const root = document.querySelector('#root');
      root.innerHTML = '<div style="color: red;"><h2>Runtime error</h2>' + err + '</div>';
      console.error(err)
    };
    window.addEventListener('error', event => {
      event.preventDefault();
      handleError(event.message);
    }, false)
    window.addEventListener('message', event => {
      try {
        eval(event.data);
      } catch (err) {
        handleError(err);
      }
    }, false)
  </script>
</body>
</html>
`;

const Preview: React.FC<PreviewProps> = ({ code, error }) => {
  const iFrame = useRef<any>();
  useEffect(() => {
    iFrame.current.srcdoc = html;
    setTimeout(() => {
      iFrame.current.contentWindow.postMessage(code, "*");
    }, 50);
  }, [code]);
  return (
    <div className='preview-wrapper'>
      <iframe
        ref={iFrame}
        srcDoc={html}
        title='preview-window'
        sandbox='allow-scripts allow-modals'
      />
      {error && (
        <div className='preview-error'>
          <h1>Bundling error</h1>

          <p>{error.replace("index.js", "users code")}</p>
        </div>
      )}
    </div>
  );
};

export default Preview;
