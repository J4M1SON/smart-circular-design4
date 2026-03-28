-- Create the transformations table
CREATE TABLE IF NOT EXISTS transformations (
  id TEXT PRIMARY KEY,
  "originalIdea" TEXT NOT NULL,
  "circularPlan" TEXT NOT NULL,
  "createdAt" BIGINT NOT NULL,
  benefits JSONB NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE transformations ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to read (for public history)
CREATE POLICY "Allow public read access" ON transformations
  FOR SELECT USING (true);

-- Create a policy that allows anyone to insert (for the tool)
CREATE POLICY "Allow public insert access" ON transformations
  FOR INSERT WITH CHECK (true);
