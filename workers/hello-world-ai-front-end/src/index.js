export default {
	async fetch(request) {
	  // HTML模板
	  const html = `<!DOCTYPE html>
  <html lang="zh">
  <head>
	  <meta charset="UTF-8">
	  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	  <title>多国语言问候语</title>
	  <style>
		  body {
			  font-family: Arial, sans-serif;
			  margin: 20px;
			  padding: 20px;
			  border: 1px solid #ccc;
		  }
	  </style>
  </head>
  <body>
	  <h1>世界各国的问候</h1>
	  <pre id="greetings">正在加载...</pre>
	  <script>
		  async function fetchGreetings() {
			  try {
				  const response = await fetch('/api/greetings');
				  const data = await response.json();
				  document.getElementById('greetings').innerText = data.response;
			  } catch (error) {
				  console.error('Error fetching data:', error);
				  document.getElementById('greetings').innerText = '无法获取问候语';
			  }
		  }

		  window.onload = fetchGreetings;
	  </script>
  </body>
  </html>`;

	  // API响应数据
	  const apiResponse = {
		response: `What a great request! I'd be happy to help you with that. Here's "Hello, World!" in ten different languages:

  1. Spanish: ¡Hola, Mundo!
  2. French: Bonjour, Monde!
  3. Chinese (Mandarin): (nǐ hǎo, shìjiè!)
  4. German: Hallo, Welt!
  5. Italian: Ciao, Mondo!
  6. Portuguese: Olá, Mundo!
  7. Japanese: (konnichiwa, sekai!)
  8. Korean: ! (annyeonghaseyo, sedang-eseong!)
  9. Russian: Здравствуйте, Мир! (Zdravstvuyte, Mir!)
  10. Arabic: مرحبا، العالم! (marhaba, al-alam!)

  I hope that's helpful! Do you have any other questions or requests?`
	  };

	  // 获取URL路径
	  const url = new URL(request.url);
	  const path = url.pathname;

	  // 路由处理
	  if (path === '/api/greetings') {
		// 返回API响应
		return new Response(JSON.stringify(apiResponse), {
		  headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
		  },
		});
	  } else {
		// 返回HTML页面
		return new Response(html, {
		  headers: {
			'Content-Type': 'text/html;charset=UTF-8',
		  },
		});
	  }
	},
  };
