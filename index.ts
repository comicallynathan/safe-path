import path from "node:path";
import type { Application } from "express";

export function Intialize( app: Application ) 
{
    const root = path.resolve( app.get( "views" ) );

    return function Safe( userpath: string ) 
    {
        return new Promise(
            ( resolve, reject ) => 
            {
                if ( typeof userpath !== "string" || !userpath ) reject( new Error( "Attempted risky access" ) );

                const resolved = path.resolve( root, userpath );

                if ( resolved.startsWith( root + path.sep ) || resolved === root ) resolve( true );
                else reject( new Error( "Path is outside views directory" ) );
            }
        );
    };
}