const n=JSON.parse(`{"key":"v-398d0d54","path":"/techniques/coding/python/csv.html","title":"CSV","lang":"en-US","frontmatter":{"title":"CSV","date":"2023-11-07T00:00:00.000Z","author":"Haiyue","icon":"circle-dot","category":["python","csv"],"star":false,"sticky":false,"description":"import json import csv # Opening JSON file and loading the data # into the variable data with open('data.json') as json_file: data = json.load(json_file) employee_data = data['emp_details'] # now we will open a file for writing data_file = open('data_file.csv', 'w') # create the csv writer object csv_writer = csv.writer(data_file) # Counter variable used for writing # headers to the CSV file count = 0 for emp in employee_data: if count == 0: # Writing headers of CSV file header = emp.keys() csv_writer.writerow(header) count += 1 # Writing data of CSV file csv_writer.writerow(emp.values()) data_file.close()","head":[["meta",{"property":"og:url","content":"https://seamice.github.io/blog/techniques/coding/python/csv.html"}],["meta",{"property":"og:site_name","content":"Haiyue's Blog"}],["meta",{"property":"og:title","content":"CSV"}],["meta",{"property":"og:description","content":"import json import csv # Opening JSON file and loading the data # into the variable data with open('data.json') as json_file: data = json.load(json_file) employee_data = data['emp_details'] # now we will open a file for writing data_file = open('data_file.csv', 'w') # create the csv writer object csv_writer = csv.writer(data_file) # Counter variable used for writing # headers to the CSV file count = 0 for emp in employee_data: if count == 0: # Writing headers of CSV file header = emp.keys() csv_writer.writerow(header) count += 1 # Writing data of CSV file csv_writer.writerow(emp.values()) data_file.close()"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-01-07T09:30:40.000Z"}],["meta",{"property":"article:author","content":"Haiyue"}],["meta",{"property":"article:published_time","content":"2023-11-07T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-07T09:30:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CSV\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-11-07T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-07T09:30:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Haiyue\\"}]}"]]},"headers":[],"git":{"createdTime":1699686182000,"updatedTime":1704619840000,"contributors":[{"name":"Haiyue","email":"nutterair1989@gmail.com","commits":3}]},"readingTime":{"minutes":0.35,"words":105},"filePathRelative":"techniques/coding/python/csv.md","localizedDate":"November 7, 2023","excerpt":"<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">import</span> json\\n<span class=\\"token keyword\\">import</span> csv\\n\\n<span class=\\"token comment\\"># Opening JSON file and loading the data</span>\\n<span class=\\"token comment\\"># into the variable data</span>\\n<span class=\\"token keyword\\">with</span> <span class=\\"token builtin\\">open</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'data.json'</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">as</span> json_file<span class=\\"token punctuation\\">:</span>\\n    data <span class=\\"token operator\\">=</span> json<span class=\\"token punctuation\\">.</span>load<span class=\\"token punctuation\\">(</span>json_file<span class=\\"token punctuation\\">)</span>\\n \\nemployee_data <span class=\\"token operator\\">=</span> data<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'emp_details'</span><span class=\\"token punctuation\\">]</span>\\n \\n<span class=\\"token comment\\"># now we will open a file for writing</span>\\ndata_file <span class=\\"token operator\\">=</span> <span class=\\"token builtin\\">open</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'data_file.csv'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'w'</span><span class=\\"token punctuation\\">)</span>\\n \\n<span class=\\"token comment\\"># create the csv writer object</span>\\ncsv_writer <span class=\\"token operator\\">=</span> csv<span class=\\"token punctuation\\">.</span>writer<span class=\\"token punctuation\\">(</span>data_file<span class=\\"token punctuation\\">)</span>\\n \\n<span class=\\"token comment\\"># Counter variable used for writing </span>\\n<span class=\\"token comment\\"># headers to the CSV file</span>\\ncount <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span>\\n \\n<span class=\\"token keyword\\">for</span> emp <span class=\\"token keyword\\">in</span> employee_data<span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token keyword\\">if</span> count <span class=\\"token operator\\">==</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">:</span>\\n        <span class=\\"token comment\\"># Writing headers of CSV file</span>\\n        header <span class=\\"token operator\\">=</span> emp<span class=\\"token punctuation\\">.</span>keys<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n        csv_writer<span class=\\"token punctuation\\">.</span>writerow<span class=\\"token punctuation\\">(</span>header<span class=\\"token punctuation\\">)</span>\\n        count <span class=\\"token operator\\">+=</span> <span class=\\"token number\\">1</span>\\n \\n    <span class=\\"token comment\\"># Writing data of CSV file</span>\\n    csv_writer<span class=\\"token punctuation\\">.</span>writerow<span class=\\"token punctuation\\">(</span>emp<span class=\\"token punctuation\\">.</span>values<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n \\ndata_file<span class=\\"token punctuation\\">.</span>close<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
