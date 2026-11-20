-- =============================================
-- NotZis Gathering – Supabase Setup
-- Run this in the Supabase SQL Editor
-- =============================================

-- 1. Create the song_requests table
CREATE TABLE IF NOT EXISTS song_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  song_title TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 2. Enable Row Level Security
ALTER TABLE song_requests ENABLE ROW LEVEL SECURITY;

-- 3. Allow anonymous inserts (no auth required)
CREATE POLICY "Allow anonymous inserts"
  ON song_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- 4. (Optional) Allow anonymous reads if you want to display submitted songs
CREATE POLICY "Allow anonymous reads"
  ON song_requests
  FOR SELECT
  TO anon
  USING (true);
