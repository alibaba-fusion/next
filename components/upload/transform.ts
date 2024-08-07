// compatible with 0.x version
import type { TransformNewProps, TransformProps } from './types';

const transform = <T extends TransformProps>(
    props: T,
    deprecated: (param0: string, param1: string, param2: string) => void
) => {
    const { listType, defaultFileList, fileList, ...others } = props;
    const newprops: TransformNewProps = others;

    if (listType === 'text-image') {
        deprecated!('listType=text-image', 'listType=image', 'Upload');
        newprops.listType = 'image';
    } else if (listType === 'picture-card') {
        deprecated!('listType=picture-card', 'listType=card', 'Upload');
        newprops.listType = 'card';
    } else {
        newprops.listType = listType;
    }

    if ('defaultFileList' in props) {
        deprecated!('defaultFileList', 'defaultValue', 'Upload');
        newprops.defaultValue = defaultFileList;
    }

    if ('fileList' in props) {
        deprecated!('fileList', 'value', 'Upload');
        newprops.value = fileList;
    }

    return newprops;
};

export default transform;
