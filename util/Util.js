// 이-----------

const Util = {};

Util.fetch = async (url) => {
    return await (await fetch(url)).json();
};

export { Util };
