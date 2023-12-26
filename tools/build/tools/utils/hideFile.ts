import * as fs from 'fs-extra';

async function hideFile(filePath: string) {
    if (fs.existsSync(filePath)) {
        const content = await fs.readFile(filePath);
        await fs.unlink(filePath);

        return async () => {
            await fs.writeFile(filePath, content);
        };
    }
    // 文件本来就不存在，无需隐藏
    return () => {};
}

export default hideFile;
