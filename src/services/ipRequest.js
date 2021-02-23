import publicIp from 'public-ip';

export const getPublicIp = (async () => await publicIp.v4());