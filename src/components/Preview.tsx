import { useEffect, useRef } from "react";
import "./preview.css";

interface PreviewProps {
  code: string;
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
    window.addEventListener('message', event => {
      try {
        eval(event.data);
      } catch (e) {
        document.querySelector('#root').innerHTML = '<div style="color: red;"><h2>Runtime error</h2>' + e + '</div>';
        console.error(e)
      }
    }, false)
  </script>
</body>
</html>
`;

const Preview: React.FC<PreviewProps> = ({ code }) => {
  const iFrame = useRef<any>();
  useEffect(() => {
    iFrame.current.contentWindow.postMessage(code, "*");
  }, [code]);
  return (
    <iframe
      ref={iFrame}
      srcDoc={html}
      title='preview-window'
      sandbox='allow-scripts allow-modals'
    />
  );
};

export default Preview;
