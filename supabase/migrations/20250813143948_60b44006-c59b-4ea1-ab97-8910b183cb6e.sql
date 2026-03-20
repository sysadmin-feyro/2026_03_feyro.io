-- Add missing DELETE policies for profiles and automation_settings tables

-- Allow users to delete their own profile
CREATE POLICY "Users can delete their own profile" 
ON public.profiles 
FOR DELETE 
USING (auth.uid() = id);

-- Allow users to delete their own automation settings
CREATE POLICY "Users can delete their own automation settings" 
ON public.automation_settings 
FOR DELETE 
USING (auth.uid() = user_id);