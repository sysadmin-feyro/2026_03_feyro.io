-- Remove ALL existing policies on contact_submissions and recreate them correctly
DO $$
DECLARE
    policy_record RECORD;
BEGIN
    -- Drop all existing policies
    FOR policy_record IN
        SELECT policyname
        FROM pg_policies
        WHERE schemaname = 'public' AND tablename = 'contact_submissions'
    LOOP
        EXECUTE format('DROP POLICY IF EXISTS %I ON public.contact_submissions', policy_record.policyname);
    END LOOP;
END $$;

-- Create correct policies
-- 1. Anyone can submit contact form (INSERT)
CREATE POLICY "Anyone can submit contact form"
ON public.contact_submissions
FOR INSERT
WITH CHECK (true);

-- 2. Only admins can view submissions (SELECT)
CREATE POLICY "Only admins can view contact submissions"
ON public.contact_submissions
FOR SELECT
USING (public.has_role(auth.uid(), 'admin'));

-- 3. Only admins can update submissions (UPDATE)
CREATE POLICY "Only admins can update contact submissions"
ON public.contact_submissions
FOR UPDATE
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));