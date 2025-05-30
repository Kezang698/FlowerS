import { cookies } from 'next/headers';

export async function POST() {
  try {
    const cookieStore = cookies();
    cookieStore.delete('userId');

    return new Response(
      JSON.stringify({ message: 'Logged out successfully' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Logout error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500 }
    );
  }
} 