import strawberry
import typing

from djanql.apps.api.models import post as PostModel
from djanql.apps.graphql.post.post_schema import Post

from cursor_pagination import CursorPaginator


def get_posts(limit: int, after: typing.Optional[str] = None):
    qs = PostModel.objects.all()
    paginator = CursorPaginator(qs, ordering=('-created', '-id'))
    page = paginator.page(first=limit, after=after)

    class Data:
        def __init__(self, result, has_next, next_cursor):
            self.result = result
            self.has_next = has_next
            self.next_cursor = next_cursor

    return Data([p for p in page], page.has_next, paginator.cursor(page[-1]))


def get_post(id: strawberry.ID):
    return PostModel.objects.get(pk=id)
