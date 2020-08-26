const fs = require('fs-extra');

async function hideFile(filePath) {
    if (await fs.exists(filePath)) {
        const content = await fs.readFile(filePath);
        await fs.unlink(filePath);

        return async () => {
            await fs.writeFile(filePath, content);
        };
    }
    // 文件本来就不存在，无需隐藏
    return () => {};
}

module.exports = hideFile;
