export default function Overview({user})
{
    return(
<div>
    <h1 className="font-anton text-3xl">Hello, {user?.user_metadata?.full_name}!</h1>
</div>
    );
}