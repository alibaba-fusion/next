const datejs =
    window.moment === undefined
        ? window.dayjs === undefined
            ? null
            : window.dayjs
        : window.moment;

if (!datejs) {
    throw new Error(`需要全局引入moment或dayjs日期库`);
}

export default datejs;
