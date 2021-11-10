//#region Imports

import { useMemo } from 'react';
import { Image } from 'semantic-ui-react';
import svgStringToUrl from 'utils/functions/svgStringToUrl';

//#endregion

const PersonImage = ({ svgString, size = 'medium' }) => {
    const imageUrl = useMemo(() => svgStringToUrl(svgString), [svgString]);
    return <Image size={size} src={imageUrl} wrapped centered />;
};

export default PersonImage;
