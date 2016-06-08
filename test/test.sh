elm-make Tests.elm --output tests.js &&
start=`date +%s` &&
node tests.js &&
stop=`date +%s` &&
time=`expr ${stop} - ${start}`
echo "took ${time}s"
