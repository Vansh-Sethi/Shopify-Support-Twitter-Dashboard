import tweepy
auth = tweepy.AppAuthHandler(consumer_token, consumer_secret)
auth.secure = True
api = tweepy.API(auth, wait_on_rate_limit=True, wait_on_rate_limit_notify=True)
api.mentions_timeline()