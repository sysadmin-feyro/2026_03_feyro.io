-- Secure SECURITY DEFINER functions: revoke public execution and grant least-privilege access
-- 1) Maintenance/automation: service_role only
REVOKE ALL ON FUNCTION public.cleanup_old_rate_limits() FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.cleanup_old_rate_limits() TO service_role;

REVOKE ALL ON FUNCTION public.cleanup_rate_limits() FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.cleanup_rate_limits() TO service_role;

REVOKE ALL ON FUNCTION public.sync_customer_project_counts() FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.sync_customer_project_counts() TO service_role;

REVOKE ALL ON FUNCTION public.trigger_generate_recurring_invoices() FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.trigger_generate_recurring_invoices() TO service_role;

REVOKE ALL ON FUNCTION public.trigger_send_invoice_reminders() FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.trigger_send_invoice_reminders() TO service_role;

-- 2) User-scoped read RPCs: authenticated + service_role
REVOKE ALL ON FUNCTION public.get_monthly_revenue_for_user(uuid) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.get_monthly_revenue_for_user(uuid) TO authenticated, service_role;

REVOKE ALL ON FUNCTION public.check_customer_duplicate(uuid, text, text, text, uuid) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.check_customer_duplicate(uuid, text, text, text, uuid) TO authenticated, service_role;

REVOKE ALL ON FUNCTION public.get_customer_analytics_for_user(uuid) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.get_customer_analytics_for_user(uuid) TO authenticated, service_role;

-- 3) Trigger/util functions: revoke from all web roles (not intended for direct RPC)
REVOKE ALL ON FUNCTION public.calculate_time_entry_duration() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.update_automation_updated_at() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.update_invoice_totals() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.update_customer_project_count() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.update_customer_project_count_freelance() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.update_project_hours() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.update_offer_totals() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.update_rate_limit_timestamp() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.initialize_user_automation_settings() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.update_updated_at_column() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.calculate_next_generation_date(date, text) FROM PUBLIC, anon, authenticated;

-- Optional hardening: also revoke from PUBLIC on user RPCs to avoid accidental exposure via PUBLIC role
-- (already handled above)

-- Verification notes (manual):
-- - Edge functions should validate caller role/claims if they assume privileged behavior.
-- - Consider scheduling maintenance functions via pg_cron as service_role.
