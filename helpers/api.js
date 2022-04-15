// deno-lint-ignore-file
export const apiGet = async (url, data = {}, options = {}, callback) => {
    try {
        let _options = {
            method: 'GET',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        };
        if (options.headers) {
            _options.headers = new Headers(hearder);
            delete options.headers;
        }

        _options = { ..._options, ..._options };

        let _url = url;
        if (data) {
            _url = `${_url}?${new URLSearchParams(data).toString()}`;
        }
        let response = await fetch(`${_url}`, _options);
        if (typeof callback === 'function') {
            callback(response.json);
        }
        return await response.json();

    } catch (err) {
        return { error: 1, message: err.message }
    }
};

export const apiPost = async (url, data = {}, options = {}, callback) => {
    try {
        let _options = {
            method: 'POST',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        };
        if (options.headers) {
            _options.headers = new Headers(hearder);
            delete options.headers;
        }

        _options = { ..._options, ..._options };

        if (data) {
            _options.body = JSON.stringify(data)
        }
        let response = await fetch(`${url}`, _options);
        if (typeof callback === 'function') {
            callback(response.json);
        }
        return await response.json();

    } catch (err) {
        return { error: 1, message: err.message }
    }
};