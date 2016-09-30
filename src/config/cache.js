import Local from '@/Cache/drivers/Local'

const DEFAULT_TTL = 1000 * 60 * 15 // 15 minutes

export default {
	ttl: DEFAULT_TTL,
	prefix: 'cw.',
	driver: new Local(),
}