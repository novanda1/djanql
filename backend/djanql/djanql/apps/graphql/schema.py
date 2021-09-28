import typing
import strawberry

from djanql.apps.api.models import post, host


@strawberry.type
class Book:
    title: str
    author: str


@strawberry.type
class Post:
    id: int
    host: str
    title: str
    podcast: str
    content: str
    excerpt: str
    status: int
    created: str
    updated: str


@strawberry.type
class Query:
    books: typing.List[Book]


def get_books():
    return [
        Book(
            title='The Great Gatsby',
            author='F. Scott Fitzgerald',
        ),
    ]


def say_hello():
    return "hello from graphql"


def get_posts():
    return post.objects.filter(status=1).order_by('-created')


@strawberry.type
class Query:
    books: typing.List[Book] = strawberry.field(resolver=get_books)
    hello: str = strawberry.field(resolver=say_hello)
    posts: typing.List[Post] = strawberry.field(resolver=get_posts)


schema = strawberry.Schema(query=Query)
