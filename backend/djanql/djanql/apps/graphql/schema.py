import typing
import strawberry


@strawberry.type
class Book:
    title: str
    author: str


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


@strawberry.type
class Query:
    books: typing.List[Book] = strawberry.field(resolver=get_books)
    hello: str = strawberry.field(resolver=say_hello)


schema = strawberry.Schema(query=Query)
