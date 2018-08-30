import { Observable } from 'rxjs';
import 'rxjs/add/observable/dom/ajax';
import { ContentType } from '../constants';

/**
 * A Http Client utility as a wrapper of RxJS's AJAX
 */
export class HttpClient {
    /**
     * GET an existing resource
     * @param {string} endpoint web service endpoint
     * @param {object} headers request headers as a object
     */
    get(endpoint, headers) {
        const _headers = { ...headers};

        return Observable.ajax
            .get(endpoint, _headers)
            .map(resp => resp.response);
    }

    /**
     * POST to web service with body as a object
     * @param {string} endpoint web service endpoint
     * @param {object} headers request headers as a object
     * @param {object} body request body as a object
     */
    postAsJson(endpoint, headers, body) {
        const _headers = { ...headers};
        const _body = JSON.stringify(body);

        return Observable.ajax
            .post(endpoint, _body, _headers)
            .map(resp => resp.response);
    }

    /**
     * POST to web service with body as Form-Url-Encoded
     * @param {string} endpoint web service endpoint
     * @param {object} headers request headers as a object
     * @param {object} body request body as a object
     */
    postAsFormUrlEncoded(endpoint, headers, body) {
        const _headers = {
            ...headers,
            'Content-Type': ContentType.FORM_URL_ENCODED,
        };
        const _body = this.serializeAsFormUrlEncode(body);

        return Observable.ajax
            .post(endpoint, _body, _headers)
            .map(resp => resp.response);
    }

    /**
     * PUT to web service with body as a object
     * @param {string} endpoint web service endpoint
     * @param {object} headers request headers as a object
     * @param {object} body request body as a object
     */
    putAsJson(endpoint, headers, body) {
        const _headers = { ...headers, 'Content-Type': ContentType.JSON_TEXT };
        const _body = JSON.stringify(body);

        return Observable.ajax
            .put(endpoint, _body, _headers)
            .map(resp => resp.response);
    }

    /**
     * PUT to web service with body as a object
     * @param {string} endpoint web service endpoint
     * @param {object} headers request headers as a object
     * @param {object} body request body as a object
     */
    putAsFormUrlEncoded(endpoint, headers, body) {
        const _headers = {
            ...headers,
            'Content-Type': ContentType.FORM_URL_ENCODED,
        };
        const _body = JSON.stringify(body);

        return Observable.ajax
            .put(endpoint, _body, _headers)
            .map(resp => resp.response);
    }

    /**
     * DELETE an existing resource
     * @param {string} endpoint web service endpoint
     * @param { object} headers request headers as a object
     */
    delete(endpoint, headers) {
        return Observable.ajax
            .delete(endpoint, headers)
            .map(resp => resp.response);
    }

    /**
     * Uri encode a object
     * @param {object} data object to serialize
     */
    serializeAsFormUrlEncode(data) {
        return Object.keys(data)
            .map(function(keyName) {
                return (
                    encodeURIComponent(keyName) +
                    '=' +
                    encodeURIComponent(data[keyName])
                );
            })
            .join('&');
    }
}

export default new HttpClient();
