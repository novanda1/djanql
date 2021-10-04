import typing
import strawberry

from djanql.apps.api.models import post, host
from djanql.apps.graphql.post.post_schema import Post, PostWCursor
from djanql.apps.graphql.post.post_resolver import get_posts, get_post


def say_hello():
    return "hello from graphql"


@strawberry.type
class Query:
    hello: str = strawberry.field(resolver=say_hello)
    posts: PostWCursor = strawberry.field(resolver=get_posts)
    post: Post = strawberry.field(resolver=get_post)


schema = strawberry.Schema(query=Query)
