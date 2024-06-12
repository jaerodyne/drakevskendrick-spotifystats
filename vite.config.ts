import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(() => ({
  test: {
		css: false,
		include: ['src/**/__tests__/*'],
		globals: true,
		environment: 'jsdom',
		setupFiles: ["src/setupTests.ts"],
		clearMocks: true,
		coverage: {
			include: ['src/**/*'],
			exclude: ['src/main.tsx'],
			thresholds: {
				'100': true
			},
			provider: 'istanbul',
			enabled: true,
			reporter: ['text', 'lcov'],
			reportsDirectory: 'coverage'
		}
	},
  plugins: [react()],
}));
