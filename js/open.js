const postIframeHeight = () => {
    const height = document.documentElement.offsetHeight;
    window.parent.postMessage({ iframeHeight: height }, '*'); // *はhttps://example.comのようにiframeを埋め込むサイトのオリジンに置き換える
    // window.parent.postMessage({ iframeHeight: height }, 'https://kokoronogenki.netlify.app/'); //本番環境用
};

window.addEventListener('DOMContentLoaded', () => {
    postIframeHeight();
});

window.addEventListener('resize', () => {
    postIframeHeight();
});        

