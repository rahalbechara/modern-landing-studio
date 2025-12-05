-- Create table for rent leads
CREATE TABLE public.rent_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nom TEXT NOT NULL,
  email TEXT NOT NULL,
  telephone TEXT,
  budget TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.rent_leads ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (for public form submissions)
CREATE POLICY "Anyone can insert rent leads"
ON public.rent_leads
FOR INSERT
WITH CHECK (true);

-- Only authenticated users can view rent leads
CREATE POLICY "Authenticated users can view rent leads"
ON public.rent_leads
FOR SELECT
TO authenticated
USING (true);