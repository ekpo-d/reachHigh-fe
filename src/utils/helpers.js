import { runInAction } from 'mobx';
import Router from 'next/router';
import nextCookie from 'next-cookies';
import cookie from 'js-cookie';

import config from '../../config';

const axios = require('axios');

const setClassProps = (arr, self) => {
	arr.forEach(elem => {
		self[elem.name] = elem.value;
	});
};

const renderIf = (condition, content) => {
  if (condition) {
    return content;
  }
  return null;
};

const axiosCore = (verb, urlPart, data = null, serverToken = null) => {
	const token = serverToken || cookie.get('token');
	if (!token) Router.push('/signin');

	if (verb === 'get') {
		return axios[verb](
			`${config.API_URL}/${urlPart}`,
			token
			? {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
			: {},
		);
	}
	return axios[verb](
		`${config.API_URL}/${urlPart}`,
		data,
		token
		? {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
		: {},
	);
};

const getData = (urlPart, token = null) => axiosCore('get', urlPart, null, token);

const postData = (urlPart, data) => axiosCore('post', urlPart, data);

const patchData = (urlPart, data) => axiosCore('patch', urlPart, data);

const runInActionUtil = (self, prop, data) => {
	runInAction(() => {
		self[prop] = data;
	});
};

// eslint-disable-next-line consistent-return
const getInitialProps = async (ctx, urlPart) => {
	const { token } = nextCookie(ctx);
  const redirectOnError = () => {
		if (window !== 'undefined') {
			Router.push('/signin');
		}
		else {
			ctx.res.writeHead(302, {
				Location: '/signin',
			});
			ctx.res.end();
		}
	};

  try {
		const data = await getData(urlPart, token).then(res => res.data);
    if (data) {
      return data;
		}
		return await redirectOnError();
	}
	catch (error) {
    redirectOnError();
  }
};

export {
	setClassProps,
	renderIf,
	getData,
	postData,
	patchData,
	runInActionUtil,
	getInitialProps,
};
