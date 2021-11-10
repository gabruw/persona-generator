const svgStringToUrl = (svgString) => {
    const blob = new Blob([svgString], { type: 'image/svg+xml' });
    return URL.createObjectURL(blob);
};

export default svgStringToUrl;
