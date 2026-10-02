package fourslash_test

import (
	"testing"

	"github.com/microsoft/TypeScript/tsc/internal/fourslash"
	"github.com/microsoft/TypeScript/tsc/internal/ls/lsutil"
	"github.com/microsoft/TypeScript/tsc/internal/lsp/lsproto"
	"github.com/microsoft/TypeScript/tsc/internal/testutil"
)

func TestExportDefer4(t *testing.T) {
	t.Parallel()
	defer testutil.RecoverAndFail(t, "Panic on fourslash test")
	const content = `import { a } from "./a" with { mode: "a\" z:\"b" };
import { b } from "./a" with { mode: "a", z: "b" };
import { c } from "./a" with { "mode:\"a\" z": "b" };

export defer { a } from "./a" with { mode: "a\" z:\"b" };
export defer { b } from "./a" with { mode: "a", z: "b" };
export defer { c } from "./a" with { "mode:\"a\" z": "b" };
void 0;`
	f, done := fourslash.NewFourslash(t, nil /*capabilities*/, content)
	defer done()
	f.VerifyOrganizeImports(
		t,
		content,
		lsproto.CodeActionKindSourceSortImportsTs,
		&lsutil.UserPreferences{OrganizeImportsSort: lsutil.OrganizeImportsSortOrdinalIgnoreCase},
	)
}
