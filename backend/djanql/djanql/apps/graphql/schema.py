from ariadne import QueryType, make_executable_schema, gql

type_defs = gql("""
    type Query {
        hello: String!
        saywhat: String!
    }
""")


# Create QueryType instance for Query type defined in our schema...
query = QueryType()

# ...and assign our resolver function to its "hello" field.


@query.field("hello")
def resolve_hello(_, info):
    request = info.context["request"]
    user_agent = request.headers.get("user-agent", "guest")
    return "Hello, %s!" % user_agent

@query.field("saywhat")
def resolve_saywhat(_, __):
    return "say what?"


schema = make_executable_schema(type_defs, query)
