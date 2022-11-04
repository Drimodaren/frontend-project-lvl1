install: #Эта команда полезна при первом клонировании репозитория (или после удаления node_modules).
	npm ci
	node bin/brain-games.js
publish: 
	npm publish --dry-run
console:
	integratedTerminal
lint:
	npx eslint .
brain-games:
	node bin/brain-games.js
brain-calc:
	node bin/brain-calc.js
brain-even:
	node bin/brain-even.js
brain-gcd:
	node bin/brain-gcd.js
brain-prime:
	node bin/brain-prime.js
brain-progression:
	node bin/brain-progression.js

