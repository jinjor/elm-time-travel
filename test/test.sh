elm-make Tests.elm --output tests.js &&
elm-make Benchmark.elm --output perf.js &&
node tests.js &&
start=`date +%s` &&
node perf.js &&
stop=`date +%s` &&
time=`expr ${stop} - ${start}`
echo "took ${time}s"
